import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIdComponent } from './products-id.component';

describe('ProductsIdComponent', () => {
  let component: ProductsIdComponent;
  let fixture: ComponentFixture<ProductsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
